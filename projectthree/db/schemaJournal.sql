CREATE DATABASE journal_db;

USE journal_db;

CREATE TABLE journal (
id INTEGER PRIMARY KEY,
savedJournal VARCHAR(255),
moodTracker VARCHAR(255),
todaysMood  VARCHAR(255),
);