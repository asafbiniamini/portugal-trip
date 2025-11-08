#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to add surf link to all navigation menus
"""

import os
import re

def update_nav_in_file(file_path):
    """Update navigation menu in a single file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to find nav menu
    # Look for the nav menu section
    nav_pattern = r'(<ul class="nav-menu"[^>]*>.*?</ul>)'
    
    # Check if surf link already exists
    if 'pages/surf.html' in content or 'surf.html' in content:
        print(f"Already updated: {file_path}")
        return False
    
    # Find and replace nav menu
    def replace_nav(match):
        nav_html = match.group(1)
        
        # Add surf link after "דף ראשי"
        if 'דף ראשי' in nav_html and 'גלישה' not in nav_html:
            # Find the position after "דף ראשי"
            nav_html = nav_html.replace(
                '</li>\n                <li><a href="pages/day1.html">',
                '</li>\n                <li><a href="pages/surf.html">🏄 גלישה</a></li>\n                <li><a href="pages/day1.html">'
            )
            # Also handle index.html case
            nav_html = nav_html.replace(
                '<a href="index.html" class="active">דף ראשי</a></li>',
                '<a href="index.html" class="active">דף ראשי</a></li>\n                <li><a href="pages/surf.html">🏄 גלישה</a></li>'
            )
            nav_html = nav_html.replace(
                '<a href="../index.html">דף ראשי</a></li>',
                '<a href="../index.html">דף ראשי</a></li>\n                <li><a href="surf.html" class="active">🏄 גלישה</a></li>'
            )
            # For day pages
            nav_html = nav_html.replace(
                '<a href="../index.html">דף ראשי</a></li>\n                <li>',
                '<a href="../index.html">דף ראשי</a></li>\n                <li><a href="surf.html">🏄 גלישה</a></li>\n                <li>'
            )
        
        return nav_html
    
    new_content = re.sub(nav_pattern, replace_nav, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")
        return True
    
    return False

def main():
    """Update all HTML files"""
    base_dir = os.path.dirname(__file__)
    
    # Update index.html
    index_path = os.path.join(base_dir, "index.html")
    if os.path.exists(index_path):
        update_nav_in_file(index_path)
    
    # Update all day pages
    pages_dir = os.path.join(base_dir, "pages")
    for i in range(1, 9):
        day_path = os.path.join(pages_dir, f"day{i}.html")
        if os.path.exists(day_path):
            update_nav_in_file(day_path)
    
    print("Done updating navigation menus!")

if __name__ == "__main__":
    main()

