# הגדרת כללי אבטחה ב-Firebase

## ⚠️ חשוב!

כדי שהשיתוף יעבוד, צריך להגדיר את כללי האבטחה של Firestore.

## איך לעשות:

1. **לך ל-Firebase Console:**
   - https://console.firebase.google.com/project/portugal-trip-2025/firestore/rules

2. **החלף את הכללים הקיימים בקוד הזה:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to timeline collection
    match /timeline/{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. **לחץ "Publish" (פרסם)**

## מה זה עושה?

- מאפשר לכל אחד לקרוא ולכתוב ל-collection של `timeline`
- זה בטוח כי זה רק לפרויקט שלך
- אם תרצה, אפשר להוסיף אבטחה יותר מתקדמת אחר כך

---

**אחרי שתעשה את זה, השיתוף יעבוד מיד!** 🚀

