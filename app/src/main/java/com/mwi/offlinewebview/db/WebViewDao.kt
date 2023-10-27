package com.mwi.offlinewebview.db
import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface WebViewDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertContact(webView: WebView)

    @Update
    suspend fun updateContact(webView: WebView)

    @Delete
    suspend fun deleteContact(webView: WebView)

    @Query("SELECT * FROM webview")
    fun getContact() : LiveData<List<WebView>>
}