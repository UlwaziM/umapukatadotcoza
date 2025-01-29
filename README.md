# UmapukataDotCoza Portfolio Website

A personal portfolio website built with ASP.NET Core MVC, featuring responsive design and interactive elements.

## Technologies Used

- HTML
- CSS 
- JavaScript
- C#
- ASP.NET Core MVC 8.0
- Bootstrap
- Adobe Photoshop

## Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Background**: Dynamic background and headshot that respond to mouse position
- **Animations**: Smooth scroll animations for enhanced user experience
- **Interactive Elements**: Hover highlighting and other interactive features
- **Performance Optimized**: Implements response compression for faster load times

## Project Structure

The project follows the standard ASP.NET Core MVC architecture:
- `Controllers/`: MVC Controllers
- `Models/`: Data models
- `Views/`: Razor views and layouts
- `wwwroot/`: Static files (CSS, JavaScript, images)

## Getting Started

### Prerequisites
- .NET 8.0 SDK
- Visual Studio 2022 or VS Code

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/umapukatadotcoza.git
```

2. Navigate to the project directory:
```bash
cd umapukatadotcoza
```

3. Restore dependencies:
```bash
dotnet restore
```

4. Run the application:
```bash
dotnet run
```

The application will be available at `https://localhost:5001` or `http://localhost:5000`

## Docker Support

The project includes Docker support with Linux as the target OS. To build and run the Docker container:

```bash
docker build -t umapukatadotcoza .
docker run -p 8080:80 umapukatadotcoza
```

## Development

The project uses:
- Microsoft.AspNetCore.ResponseCompression (v2.3.0)
- Microsoft.VisualStudio.Azure.Containers.Tools.Targets (v1.21.0)
- Microsoft.VisualStudio.Web.CodeGeneration.Design (v9.0.0)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
