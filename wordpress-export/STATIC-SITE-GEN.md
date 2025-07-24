# Simply Static - WordPress Plugin

## Overview
Simply Static is a WordPress static site generator plugin that converts WordPress websites into static HTML sites for improved performance and security.

## Key Information
- **Current Version**: 3.3.2
- **PHP Requirements**: 7.4+
- **WordPress Requirements**: 6.2+
- **Author**: Patrick Posner
- **License**: GPL-2.0+
- **Plugin URI**: https://patrickposner.dev
- **Documentation**: https://docs.simplystatic.com

## Project Structure

### Main Entry Points
- `simply-static.php:51` - Main plugin bootstrap and initialization
- `src/class-ss-plugin.php` - Core plugin class (Singleton pattern)

### Core Directories
- `src/` - Main source code
- `src/admin/` - React-based admin interface
- `src/tasks/` - Task-based export system (9 task types)
- `src/integrations/` - Plugin integrations (11 integrations)
- `src/handlers/` - Specialized page handlers
- `src/models/` - Data models
- `assets/` - Static assets and admin scripts
- `languages/` - Translation files
- `views/` - PHP view templates

### Key Components

#### Task System (src/tasks/)
Export process uses task-based architecture:
1. **Setup Task** - Initialize export process
2. **Scan All Task** - Discover all URLs to process
3. **Fetch URLs Task** - Download and process pages
4. **Generate 404 Task** - Create 404 error pages
5. **Transfer Files Task** - Move files to destination
6. **Create ZIP Archive** - Package static files
7. **Wrapup Task** - Cleanup and finalization
8. **Cancel Task** - Handle export cancellation

#### Integration System (src/integrations/)
Supports major WordPress plugins:
- Yoast SEO
- RankMath SEO
- All-in-One SEO
- SEOPress
- Elementor & Elementor Pro
- Jetpack
- Cookie Yes
- Admin Bar integration

#### Admin Interface (src/admin/)
React-based settings interface with:
- Settings management
- Activity logging
- Export monitoring
- Diagnostics
- Environment management

## Core Functionality

### Static Site Generation Process
1. **URL Discovery**: Crawls WordPress site starting from homepage
2. **Content Processing**: Extracts URLs from HTML, CSS, JS files
3. **File Processing**: Downloads and processes all linked assets
4. **URL Replacement**: Converts WordPress URLs to static URLs
5. **File Transfer**: Outputs to local directory or ZIP archive

### Key Features
- **Background Processing**: Uses WordPress cron for large exports
- **URL Extraction**: Advanced parsing of HTML, CSS, JS, and XML files
- **Plugin Compatibility**: Extensive integration support
- **Multiple Export Types**: Full, incremental, and single page exports
- **Deployment Options**: Local directory, ZIP download, various hosting providers

## Development Notes

### Code Standards
- PHP 7.4+ with modern syntax
- WordPress coding standards
- Namespaced classes (`Simply_Static\`)
- Singleton pattern for main plugin class
- Task-based architecture for scalability

### Key Constants
- `SIMPLY_STATIC_PATH` - Plugin directory path
- `SIMPLY_STATIC_URL` - Plugin URL
- `SIMPLY_STATIC_VERSION` - Current version
- `SS_CRON` - Server-side cron flag

### Common Commands
Check the project for specific build/test commands. The admin interface uses npm/Node.js for React components.

## Plugin Compatibility
Maintains compatibility database for 100+ plugins and automatically handles:
- SEO plugin sitemaps
- Page builder assets
- CDN integrations
- Caching plugin interactions

## Security Features
- Basic authentication support
- Secure debug logging
- CSRF protection
- Input sanitization
- Capability-based access control