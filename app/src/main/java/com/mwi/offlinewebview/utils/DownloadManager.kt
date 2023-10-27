package com.mwi.offlinewebview.utils

import android.content.Context
import android.widget.Toast
import com.mwi.offlinewebview.db.RoomDB
import com.mwi.offlinewebview.db.WebView
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileOutputStream
import java.io.InputStream
import java.net.HttpURLConnection
import java.net.URL

class DownloadManager(private val context: Context, private val database: RoomDB) {

    fun downloadZipFile(url: String, destinationDirectory: File) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val urlConnection = URL(url).openConnection() as HttpURLConnection
                urlConnection.connect()
                if (urlConnection.responseCode == HttpURLConnection.HTTP_OK) {
                    val inputStream: InputStream = urlConnection.inputStream
                    val outputFile = File(destinationDirectory, "downloaded_file.zip")
                    val outputStream = FileOutputStream(outputFile)

                    val buffer = ByteArray(1024)
                    var len: Int
                    while (inputStream.read(buffer).also { len = it } > 0) {
                        outputStream.write(buffer, 0, len)
                    }

                    // When the download is complete
                    val downloadedFile = WebView(
                        0,
                        fileName = "downloaded_file.zip",
                        fileLocation = outputFile.absolutePath
                    )

                    if (FileHelper.unzip(outputFile.absolutePath, destinationDirectory.absolutePath+"/unzipWebpage")) {
                        withContext(Dispatchers.Main) {
                            // Notify the user that the download is complete
                        Toast.makeText(context, "Unzip successfully.", Toast.LENGTH_LONG)
                            .show()
                        }
                    }

                    database.webViewDao().insertContact(downloadedFile)

                    outputStream.flush()
                    outputStream.close()
                    inputStream.close()

                    withContext(Dispatchers.Main) {
                        // Notify the user that the download is complete
                        Toast.makeText(context, "Download complete", Toast.LENGTH_SHORT).show()
                    }
                } else {
                    withContext(Dispatchers.Main) {
                        // Handle the error or show an error message to the user
                        Toast.makeText(context, "Download failed", Toast.LENGTH_SHORT).show()
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
                withContext(Dispatchers.Main) {
                    // Handle the exception or show an error message to the user
                    Toast.makeText(context, "Download failed", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }
}
