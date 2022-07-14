function resize() {
    if (layer[0].displayWidth !== undefined)
    {
        var w = layer[0].displayWidth + 100;
        var h = layer[0].displayHeight + 100;
        layer[0].resize(w, h);
    }
    else
    {
        if (layer[0].width < 800)
        {
            var w = layer[0].width + 100;
            var h = layer[0].height + 100;
            layer[0].resize(w, h);
        }
    }
}