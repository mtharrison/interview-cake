var my_rectangle = {
    x: 1,
    y: 1,
    width: 10,
    height: 10
};

var your_rectangle = {
    x: 2,
    y: 2,
    width: 5,
    height: 5
};

var find_overlap = function (r1x1, width1, r2x1, width2) {

    // Find the point of intersection on x

    var r1x2 = r1x1 + width1;
    var r2x2 = r2x1 + width2;

    // no intersection on X

    if (r2x1 > r1x2 || r2x2 < r1x1) {
        return null;
    }
    if (r2x1 > r1x1 && r2x1 < r1x2) {
        return [r2x1, Math.min(r1x2 - r2x1, r2x2 - r2x1)]
    } else {
        return [r1x1, Math.min(r1x2 - r2x1, r2x2 - r2x1 - r1x1 - r2x1)]
    }
}

var getIntersection = function (r1, r2) {

    var xOverlap = find_overlap(r1.x, r1.width, r2.x, r2.width);
    var yOverlap = find_overlap(r1.y, r1.height, r2.y, r2.height);

    if (!xOverlap || !yOverlap) {
        return null;
    }

    return {
        x: xOverlap[0],
        y: yOverlap[0],
        width: xOverlap[1],
        height: yOverlap[1]
    };
};

console.log(getIntersection(my_rectangle, your_rectangle));

