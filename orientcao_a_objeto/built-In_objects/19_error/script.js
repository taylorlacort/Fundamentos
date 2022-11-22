try {
    //
    throw new Error(' Deu problema no código');
} catch (e) {
    console.log(e.name + ':' + e.message);
}