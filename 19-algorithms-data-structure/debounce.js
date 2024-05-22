function debounce(func, delay) {
    let timer;

    return function() {
        clearTimeout(timer);

        timer = setTimeout(func, delay);
    }
}

// Caso de prueba
function testDebounce() {
    let counter = 0;
    const increment = () => {
        counter++;
    };

    const debouncedIncrement = debounce(increment, 100);

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    // Esperar más tiempo del retraso para asegurarse de que el contador se incremente
    setTimeout(() => {
        console.assert(counter === 1, `Expected counter to be 1, but got ${counter}`);
        console.log(`Test passed! Counter is ${counter}`);
    }, 150);
}

testDebounce();
