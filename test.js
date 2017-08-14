/**
 * @param {string} s1 Исходная строка
 * @param {string} s2 Сравниваемая строка
 * @param {object} [costs] Веса операций { [replace], [replaceCase], [insert], [remove] }
 * @return {number} Расстояние Левенштейна
 */
function levenshtein(s1, s2, costs) {
    var i, j, l1, l2, flip, ch, chl, ii, ii2, cost, cutHalf;
    l1 = s1.length;
    l2 = s2.length;

    costs = costs || {};
    var cr = costs.replace || 1;
    var cri = costs.replaceCase || costs.replace || 1;
    var ci = costs.insert || 1;
    var cd = costs.remove || 1;

    cutHalf = flip = Math.max(l1, l2);

    var minCost = Math.min(cd, ci, cr);
    var minD = Math.max(minCost, (l1 - l2) * cd);
    var minI = Math.max(minCost, (l2 - l1) * ci);
    var buf = new Array((cutHalf * 2) - 1);

    for (i = 0; i <= l2; ++i) {
        buf[i] = i * minD;
    }

    for (i = 0; i < l1; ++i, flip = cutHalf - flip) {
        ch = s1[i];
        chl = ch.toLowerCase();

        buf[flip] = (i + 1) * minI;

        ii = flip;
        ii2 = cutHalf - flip;

        for (j = 0; j < l2; ++j, ++ii, ++ii2) {
            cost = (ch === s2[j] ? 0 : (chl === s2[j].toLowerCase()) ? cri : cr);
            buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
        }
    }
    return buf[l2 + cutHalf - flip];
}

var diff = levenshtein('Hello', 'Hellaaaaaa');
console.log(diff)



// def distance(a, b):
//     "Calculates the Levenshtein distance between a and b."
//     n, m = len(a), len(b)
//     if n > m:
//         # Make sure n <= m, to use O(min(n,m)) space
//         a, b = b, a
//         n, m = m, n

//     current_row = range(n+1) # Keep current and previous row, not entire matrix
//     for i in range(1, m+1):
//         previous_row, current_row = current_row, [i]+[0]*n
//         for j in range(1,n+1):
//             add, delete, change = previous_row[j]+1, current_row[j-1]+1, previous_row[j-1]
//             if a[j-1] != b[i-1]:
//                 change += 1
//             current_row[j] = min(add, delete, change)

//     return current_row[n]

