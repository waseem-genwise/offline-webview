package com.mwi.offlinewebview.db
import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters

@Database(entities = [WebView::class], version = 1)
@TypeConverters(Convertors::class)
abstract class RoomDB : RoomDatabase() {

    abstract fun webViewDao(): WebViewDao

}