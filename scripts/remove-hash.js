/* Remove a hashtag na URL do site */
window.addEventListener("hashchange", () => {
    history.replaceState(null, null, window.location.pathname);
})