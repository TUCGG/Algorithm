function solution(n)
{
    let answer = 0
    let data = String(n).split('');
    data.forEach((string) => { answer += Number(string)})

    return answer;
}