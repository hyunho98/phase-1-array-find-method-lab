// code your solution here
function superbowlWin(array) {
    let win;
    win = array.find(element => element.result === "W");

    if (win)
        return win.year;
    else
        return undefined;
}   