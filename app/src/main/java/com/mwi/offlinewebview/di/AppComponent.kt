package com.mwi.offlinewebview.di

import android.content.Context
import androidx.room.Room
import com.mwi.offlinewebview.db.RoomDB
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@InstallIn(SingletonComponent::class)
@Module
class AppComponent {

    @Singleton
    @Provides
    fun getRoomDB(@ApplicationContext applicationContext: Context): RoomDB {
//        private val migration_1_2 = object : Migration(1,2){
//            override fun migrate(database: SupportSQLiteDatabase) {
//                database.execSQL("ALTER TABLE contact ADD COLUMN isActive INTEGER NOT NULL DEFAULT(1)")
//            }
//        }

        return Room.databaseBuilder(
            applicationContext,
            RoomDB::class.java,
            "RoomDatabase"
        )
            //.addMigrations(migration_1_2)
            .build()

    }
}