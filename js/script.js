// Funcionalidades básicas da wiki
document.addEventListener('DOMContentLoaded', function() {
    // Marcar página atual na sidebar
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        
        sidebarLinks.forEach(link => {
            link.classList.remove('current-page');
            
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath || 
                (currentPath.includes(linkPath) && linkPath !== '/' && linkPath !== '')) {
                link.classList.add('current-page');
            }
        });
    }
    
    highlightCurrentPage();
    
    // Toggle para sidebar em mobile
    function setupMobileMenu() {
        if (window.innerWidth < 1024) {
            const sidebar = document.querySelector('.sidebar');
            const sidebarToggle = document.createElement('button');
            
            sidebarToggle.className = 'button sidebar-toggle';
            sidebarToggle.innerHTML = '☰ Menu';
            sidebarToggle.style.cssText = `
                display: block;
                margin: 0 auto 1rem auto;
                width: 100%;
            `;
            
            // Inserir toggle antes da sidebar
            sidebar.parentNode.insertBefore(sidebarToggle, sidebar);
            
            // Esconder sidebar inicialmente em mobile
            sidebar.classList.add('hidden');
            
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                sidebarToggle.textContent = sidebar.classList.contains('hidden') ? '☰ Mostrar Menu' : '✕ Fechar Menu';
            });
        }
    }
    
    setupMobileMenu();
    
    // Ajustar em redimensionamento
    window.addEventListener('resize', function() {
        setupMobileMenu();
    });
    
    // Adicionar breadcrumb automático
    function addBreadcrumb() {
        const pathSegments = window.location.pathname.split('/').filter(segment => segment);
        if (pathSegments.length > 1 && !document.querySelector('.breadcrumb')) {
            const mainContent = document.querySelector('.main-content .content-wrapper');
            if (mainContent) {
                const breadcrumb = document.createElement('div');
                breadcrumb.className = 'breadcrumb';
                
                let breadcrumbHTML = '<a href="/">Home</a>';
                let accumulatedPath = '';
                
                pathSegments.forEach((segment, index) => {
                    accumulatedPath += '/' + segment;
                    const segmentName = decodeURI(segment)
                        .replace(/\.html$/, '')
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, l => l.toUpperCase());
                    
                    if (index === pathSegments.length - 1) {
                        breadcrumbHTML += ` <span>›</span> <strong>${segmentName}</strong>`;
                    } else {
                        breadcrumbHTML += ` <span>›</span> <a href="${accumulatedPath}">${segmentName}</a>`;
                    }
                });
                
                breadcrumb.innerHTML = breadcrumbHTML;
                const firstChild = mainContent.firstChild;
                mainContent.insertBefore(breadcrumb, firstChild);
            }
        }
    }
    
    addBreadcrumb();
});

