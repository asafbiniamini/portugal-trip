# איך להעלות את האתר ל-Netlify דרך Git

## שלב 1: יצירת Git Repository מקומי

1. פתח טרמינל בתיקייה `website`
2. הרץ את הפקודות הבאות:

```bash
cd /home/user/portugal-trip/website
git init
git add .
git commit -m "Initial commit - Portugal trip website"
```

## שלב 2: יצירת Repository ב-GitHub

1. היכנס ל-GitHub: https://github.com
2. לחץ על הכפתור הירוק **"New"** או **"+"** → **"New repository"**
3. מלא:
   - **Repository name:** `portugal-trip-website` (או כל שם שתרצה)
   - **Description:** "Trip planning website for Portugal 2025"
   - **Public** או **Private** (תלוי בך)
   - **אל תסמן** "Add a README file" (כי כבר יש לנו קבצים)
4. לחץ **"Create repository"**

## שלב 3: העלאת הקוד ל-GitHub

GitHub יראה לך הוראות. הרץ את הפקודות הבאות בטרמינל:

```bash
cd /home/user/portugal-trip/website
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portugal-trip-website.git
git push -u origin main
```

**חשוב:** החלף `YOUR_USERNAME` בשם המשתמש שלך ב-GitHub!

## שלב 4: חיבור ל-Netlify

1. חזור ל-Netlify: https://app.netlify.com
2. לחץ על **"Add new site"** → **"Import an existing project"**
3. בחר **"GitHub"** (או **"GitLab"** אם השתמשת בו)
4. אם זה הפעם הראשונה, Netlify יבקש הרשאה לגישה ל-GitHub - אשר
5. בחר את ה-repository שיצרת (`portugal-trip-website`)
6. Netlify יזהה אוטומטית את ההגדרות:
   - **Build command:** השאר ריק (אין build)
   - **Publish directory:** `website` (או `.` אם העלית את כל התיקייה)
7. לחץ **"Deploy site"**

## שלב 5: קבלת ה-URL

אחרי כמה שניות, תקבל URL לאתר שלך:
- למשל: `https://portugal-trip-website-123.netlify.app`
- אפשר לשנות את השם ב-Site settings → General → Site details → Change site name

## עדכונים עתידיים

כשאתה רוצה לעדכן את האתר:
1. ערוך את הקבצים
2. הרץ:
   ```bash
   cd /home/user/portugal-trip/website
   git add .
   git commit -m "Updated website"
   git push
   ```
3. Netlify יעדכן את האתר אוטומטית!

---

## 🆘 בעיות נפוצות

### "git: command not found"
- התקן Git: `sudo apt install git` (Linux) או הורד מ-https://git-scm.com

### "Permission denied" ב-push
- וודא שהזנת את שם המשתמש והסיסמה נכון
- או השתמש ב-SSH key (מתקדם יותר)

### Netlify לא מוצא את הקבצים
- וודא ש-**Publish directory** מוגדר נכון:
  - אם העלית את כל התיקייה `website` → השאר ריק או `.`
  - אם העלית רק את התוכן של `website` → השאר ריק

---

## 💡 טיפ

אם זה נראה מסובך, אפשר פשוט להשתמש ב-**Netlify Drop**:
- https://app.netlify.com/drop
- גרור את התיקייה `website`
- תקבל URL מיד!

**בהצלחה! 🚀**

