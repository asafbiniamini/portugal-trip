# מדריך: העלאת הפרויקט ל-GitHub ואז ל-Netlify

## ✅ מה שכבר עשינו:
- ✅ יצרנו Git repository מקומי
- ✅ הוספנו את כל הקבצים
- ✅ עשינו commit ראשוני

## שלב 1: יצירת Repository ב-GitHub

1. **היכנס ל-GitHub:** https://github.com
2. **לחץ על הכפתור הירוק "New"** (או ה-"+") → **"New repository"**
3. **מלא את הפרטים:**
   - **Repository name:** `portugal-trip` (או כל שם שתרצה)
   - **Description:** "Trip planning website for Portugal 2025"
   - בחר **Public** או **Private** (תלוי בך)
   - **⚠️ חשוב:** אל תסמן "Add a README file" או "Add .gitignore" (כי כבר יש לנו!)
4. **לחץ "Create repository"**

## שלב 2: העלאת הקוד ל-GitHub

אחרי שיצרת את ה-repository, GitHub יראה לך הוראות. 

**הרץ את הפקודות הבאות בטרמינל:**

```bash
cd /home/user/portugal-trip
git remote add origin https://github.com/asafbiniamini/portugal-trip
git push -u origin main
```

**⚠️ חשוב:** החלף `YOUR_USERNAME` בשם המשתמש שלך ב-GitHub!

**אם GitHub יבקש שם משתמש וסיסמה:**
- שם משתמש: השם שלך ב-GitHub
- סיסמה: **לא** הסיסמה הרגילה! צריך ליצור **Personal Access Token**
  - לך ל: https://github.com/settings/tokens
  - לחץ "Generate new token" → "Generate new token (classic)"
  - תן שם: "Netlify Deploy"
  - סמן "repo" (כל ההרשאות)
  - לחץ "Generate token"
  - **העתק את ה-token** (תראה אותו רק פעם אחת!)
  - השתמש ב-token הזה במקום הסיסמה

## שלב 3: חיבור ל-Netlify

1. **היכנס ל-Netlify:** https://app.netlify.com
2. **לחץ על "Add new site"** → **"Import an existing project"**
3. **בחר "GitHub"** (או "GitLab" אם השתמשת בו)
4. **אם זה הפעם הראשונה:**
   - Netlify יבקש הרשאה לגישה ל-GitHub
   - לחץ "Authorize Netlify"
   - אשר את ההרשאות
5. **בחר את ה-repository** שיצרת (`portugal-trip`)
6. **הגדר את ההגדרות:**
   - **Branch to deploy:** `main`
   - **Build command:** השאר **ריק** (אין build)
   - **Publish directory:** `website` ⚠️ **זה חשוב!**
7. **לחץ "Deploy site"**

## שלב 4: קבלת ה-URL

אחרי כמה שניות, תקבל URL לאתר שלך:
- למשל: `https://portugal-trip-123.netlify.app`

**לשנות את השם:**
- לך ל-Site settings → General → Site details
- לחץ "Change site name"
- בחר שם מותאם (למשל: `portugal-trip-2025`)

## עדכונים עתידיים

כשאתה רוצה לעדכן את האתר:

```bash
cd /home/user/portugal-trip
git add .
git commit -m "תיאור השינויים"
git push
```

Netlify יעדכן את האתר אוטומטית תוך דקות!

---

## 🆘 בעיות נפוצות

### "git: command not found"
```bash
sudo apt install git
```

### "Permission denied" ב-push
- וודא שהזנת את שם המשתמש נכון
- השתמש ב-Personal Access Token במקום סיסמה

### Netlify לא מוצא את הקבצים
- וודא ש-**Publish directory** מוגדר ל-`website`
- לא `.` ולא `./website` - רק `website`

### האתר לא נטען
- בדוק ב-Netlify → Deploys אם יש שגיאות
- וודא שכל הקבצים בתיקייה `website` נדחפו ל-GitHub

---

## 💡 טיפים

- **עדכונים אוטומטיים:** כל push ל-GitHub יעדכן את האתר אוטומטית
- **היסטוריה:** כל השינויים נשמרים ב-GitHub
- **גיבוי:** הקוד שלך נשמר ב-GitHub, אז יש לך גיבוי אוטומטי

**בהצלחה! 🚀**

