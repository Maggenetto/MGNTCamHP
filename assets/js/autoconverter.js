window.onload = () => {
    const isBlogPost = document.getElementsByClassName('blog-auto-insert-element').length;
    if( isBlogPost === 0 ) return;
    if( isBlogPost > 1 ) {
        console.error('Multiple blog-auto-insert-element found. Only one is allowed.');
        return;
    }

    const blogPost = document.getElementsByClassName('blog-auto-insert-element')[0];
    const articleMain = document.getElementsByClassName('article-content')[0];
    if( !articleMain ) {
        console.error('No article-content found.');
        return;
    }
    const getArticleMidashis = articleMain.getElementsByTagName('h2');
    const articleMidashis = [];
    for( let i = 0; i < getArticleMidashis.length; i++ ) {
        articleMidashis.push(getArticleMidashis[i].innerText);
        getArticleMidashis[i].setAttribute('id', `${getArticleMidashis[i].innerText}`);
        
    }
    
    blogPost.innerHTML = `
    <h2>目次</h2>
         ${articleMidashis.map( midashi => `<a href="#${midashi}">${midashi}<br></a>` ).join('')}
    `
}