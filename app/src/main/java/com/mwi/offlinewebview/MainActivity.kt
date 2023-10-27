package com.mwi.offlinewebview

import android.net.Uri
import android.os.Bundle
import android.os.Environment
import android.util.Log
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import com.mwi.offlinewebview.databinding.ActivityMainBinding
import com.mwi.offlinewebview.db.RoomDB
import com.mwi.offlinewebview.utils.DownloadManager
import com.mwi.offlinewebview.utils.Utility
import dagger.hilt.android.AndroidEntryPoint
import javax.inject.Inject

@AndroidEntryPoint
class MainActivity : AppCompatActivity() {

    @Inject
    lateinit var database : RoomDB

    private lateinit var binding : ActivityMainBinding


    protected lateinit var webview: android.webkit.WebView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        Utility().checkPermission(this)
        val downloadManager = DownloadManager(this,database)
        downloadManager.downloadZipFile("https://d319fsidmzmq2a.cloudfront.net/familybuild/build.zip", getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS)!!)


        binding.btnGetData.setOnClickListener {
            database.webViewDao().getContact().observe(this){
                Log.e("SSFDSFSDF","${it[0].fileLocation.substringBefore("downloaded_file.zip")}unzipWebpage/index.html")
                initialiseWebView("${it[0].fileLocation.substringBefore("downloaded_file.zip")}unzipWebpage/index.html")
            }
        }
    }


    private fun initialiseWebView(url : String) {
        val wv = binding.webView
        webview = wv
        webview.isVerticalScrollBarEnabled = false
        webview.isHorizontalScrollBarEnabled = false
        with(webview) {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.loadsImagesAutomatically = true
            settings.mediaPlaybackRequiresUserGesture = false
            settings.layoutAlgorithm = WebSettings.LayoutAlgorithm.TEXT_AUTOSIZING
            settings.allowFileAccess= true
            settings.allowContentAccess= true
            settings.allowFileAccessFromFileURLs = false
            settings.allowUniversalAccessFromFileURLs = false
        }

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/asset/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
        webview.webViewClient = object : WebViewClientCompat() {

            override fun shouldInterceptRequest(view: WebView?, request: WebResourceRequest): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }

            // for API < 21
            override fun shouldInterceptRequest(view: WebView?, url: String?): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(Uri.parse(url))
            }
        }
        webview.loadUrl("https://appassets.androidplatform.net/asset/index.html")
    }

}