function solution(sizes) {
    var answer = 0;
    var sortArr = sizes.map((arr) => {
        return arr.slice().sort((a, b) => b - a);
    });
    var ver = 0;
    var hor = 0;
    sortArr.map((data) => {
        if(data[0] > ver) {
            ver = data[0]
        }
        if(data[1] > hor) {
            hor = data[1]
        }
    })
    answer = ver*hor;

    return answer;
}