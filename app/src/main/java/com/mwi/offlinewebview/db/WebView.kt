package com.mwi.offlinewebview.db
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.Date

@Entity(tableName = "webview")
data class WebView(
    @PrimaryKey(autoGenerate = true)
    val id: Long,
    val fileName: String,
    val fileLocation: String
)
