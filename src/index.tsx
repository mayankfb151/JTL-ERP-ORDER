import("./FancyButton").then((promise) => {
    const localRoot = document.getElementById("app1-local");
    promise.default({
        mountPoint: localRoot!,
        routingStrategy: "browser",
    });
});

export {};

//import("./bootstrap");
