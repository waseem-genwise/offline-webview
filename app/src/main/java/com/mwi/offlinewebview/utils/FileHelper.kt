package com.mwi.offlinewebview.utils

import android.util.Log
import java.io.BufferedInputStream
import java.io.BufferedOutputStream
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.FileOutputStream
import java.io.IOException
import java.util.zip.ZipEntry
import java.util.zip.ZipInputStream
import java.util.zip.ZipOutputStream


/**
 * Created by Govind on 02/05/2018.
 */
object FileHelper {
    private const val BUFFER_SIZE = 8192 //2048;
    private val TAG = FileHelper::class.java.name.toString()
    private var parentPath = ""
    fun zip(
        sourcePath: String,
        destinationPath: String,
        destinationFileName: String,
        includeParentFolder: Boolean
    ): Boolean {
        var destinationPath = destinationPath
        File(destinationPath).mkdirs()
        val fileOutputStream: FileOutputStream
        var zipOutputStream: ZipOutputStream? = null
        try {
            if (!destinationPath.endsWith("/")) destinationPath += "/"
            val destination = destinationPath + destinationFileName
            val file = File(destination)
            if (!file.exists()) file.createNewFile()
            fileOutputStream = FileOutputStream(file)
            zipOutputStream = ZipOutputStream(BufferedOutputStream(fileOutputStream))
            if (includeParentFolder) FileHelper.parentPath =
                File(sourcePath).parent + "/" else FileHelper.parentPath = sourcePath
            FileHelper.zipFile(zipOutputStream, sourcePath)
        } catch (ioe: IOException) {
            Log.d(FileHelper.TAG, ioe.message!!)
            return false
        } finally {
            if (zipOutputStream != null) try {
                zipOutputStream.close()
            } catch (e: IOException) {
            }
        }
        return true
    }

    @Throws(IOException::class)
    private fun zipFile(zipOutputStream: ZipOutputStream, sourcePath: String) {
        val files = File(sourcePath)
        val fileList = files.listFiles()
        var entryPath = ""
        var input: BufferedInputStream
        for (file in fileList) {
            if (file.isDirectory) {
                FileHelper.zipFile(zipOutputStream, file.path)
            } else {
                val data = ByteArray(BUFFER_SIZE)
                val fileInputStream = FileInputStream(file.path)
                input = BufferedInputStream(fileInputStream, BUFFER_SIZE)
                entryPath = file.absolutePath.replace(FileHelper.parentPath, "")
                val entry = ZipEntry(entryPath)
                zipOutputStream.putNextEntry(entry)
                var count: Int
                while (input.read(data, 0, BUFFER_SIZE).also { count = it } != -1) {
                    zipOutputStream.write(data, 0, count)
                }
                input.close()
            }
        }
    }

    fun unzip(sourceFile: String?, destinationFolder: String?): Boolean {
        var zis: ZipInputStream? = null
        try {
            zis = ZipInputStream(BufferedInputStream(FileInputStream(sourceFile)))
            var ze: ZipEntry?
            var count: Int
            val buffer = ByteArray(BUFFER_SIZE)
            while (zis.nextEntry.also { ze = it } != null) {
                var fileName = ze!!.name
                fileName = fileName.substring(fileName.indexOf("/") + 1)
                val file = File(destinationFolder, fileName)
                val dir = if (ze!!.isDirectory) file else file.parentFile
                if (!dir.isDirectory && !dir.mkdirs()) throw FileNotFoundException("Invalid path: " + dir.absolutePath)
                if (ze!!.isDirectory) continue
                val fout = FileOutputStream(file)
                try {
                    while (zis.read(buffer).also { count = it } != -1) fout.write(buffer, 0, count)
                } finally {
                    fout.close()
                }
            }
        } catch (ioe: IOException) {
            Log.d(FileHelper.TAG, ioe.message!!)
            return false
        } finally {
            if (zis != null) try {
                zis.close()
            } catch (e: IOException) {
            }
        }
        return true
    }

    fun saveToFile(destinationPath: String, data: String, fileName: String) {
        try {
            File(destinationPath).mkdirs()
            val file = File(destinationPath + fileName)
            if (!file.exists()) {
                file.createNewFile()
            }
            val fileOutputStream = FileOutputStream(file, true)
            fileOutputStream.write((data + System.getProperty("line.separator")).toByteArray())
        } catch (ex: FileNotFoundException) {
            Log.d(FileHelper.TAG, ex.message!!)
        } catch (ex: IOException) {
            Log.d(FileHelper.TAG, ex.message!!)
        }
    }
}