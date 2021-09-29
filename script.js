/* SCRIPT */

window.addEventListener('DOMContentLoaded', () => {

    /* MASONRY GRID */

    const grid = document.querySelector('.grid');

    const msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    imagesLoaded(grid).on( 'progress', function() {
        msnry.layout();
    });
});
