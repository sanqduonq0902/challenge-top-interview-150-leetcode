function maxPoints(points: number[][]): number {
    const n = points.length;
    if (n <= 2) return n;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let samePoint = 1;
        const map = new Map<string, number>();

        for (let j = i + 1; j < n; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            if (dx === 0 && dy === 0) {
                samePoint++;
                continue;
            }

            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            if (dx === 0) {
                dy = 1;
            }
            else if (dy === 0) {
                dx = 1;
            }
            else if (dx < 0) {
                dx = -dx;
                dy = -dy;
            }

            const key = `${dy}/${dx}`;
            map.set(key, (map.get(key) || 0) + 1);
        }

        let maxLine = 0;
        for (const count of map.values()) {
            maxLine = Math.max(maxLine, count);
        }

        result = Math.max(result, maxLine + samePoint);
    }

    return result;
};

function gcd(a: number, b: number): number {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
}