import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import MainPage from './components/MainPage';
import SubPage1 from './components/SubPage1';
import SubPage2 from './components/SubPage2';
import SubPage3 from './components/SubPage3';
import SubPage4 from './components/SubPage4';
import SubPage5 from './components/SubPage5';

const App = () => {
    const [hash, setHash] = useState(window.location.hash || '#');

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash || '#');
        window.addEventListener('hashchange', handleHashChange);

        const handleMenuClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.href.includes('admin.php?page=main-page')) {
                e.preventDefault();
                const newHash = target.hash || '#';
                if (newHash !== window.location.hash) {
                    window.location.hash = newHash;
                } else {
                    setHash(newHash);
                }
            }
        };

        // Prevent page reload on menu clicks
        document.querySelectorAll('a[href*="admin.php?page=main-page"]').forEach(link => {
            link.addEventListener('click', handleMenuClick);
        });

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.querySelectorAll('a[href*="admin.php?page=main-page"]').forEach(link => {
                link.removeEventListener('click', handleMenuClick);
            });
        };
    }, []);

    useEffect(() => {
        // Add 'current' class to the active menu item
        const menuItems = document.querySelectorAll('li a[href*="admin.php?page=main-page"]');
        menuItems.forEach(item => {
            if (item.hash === hash || (item.hash === '' && hash === '#')) {
                item.parentElement.classList.add('current');
            } else {
                item.parentElement.classList.remove('current');
            }
        });
    }, [hash]);

    let component;
    switch (hash) {
        case '#sub-page-1':
            component = <SubPage1 />;
            break;
        case '#sub-page-2':
            component = <SubPage2 />;
            break;
        case '#sub-page-3':
            component = <SubPage3 />;
            break;
        case '#sub-page-4':
            component = <SubPage4 />;
            break;
        case '#sub-page-5':
            component = <SubPage5 />;
            break;
        default:
            component = <MainPage />;
            break;
    }

    return <div>{component}</div>;
};

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('my-spa-app'));
});
