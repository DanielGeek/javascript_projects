//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacter = (input) => {
    let minIndex = input.length;
    let result = undefined;

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                if (j < minIndex) {
                    minIndex = j;
                    result = input[i];
                }
                break; // Stop the inner loop once a match is found
            }
        }
    }
    return result;
} //O(n^2)

const firstRecurringCharacter2 = (input) => {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
} // O(n)

const array = [2, 5, 5, 2, 3, 5, 1, 2, 4];
const fRecurringCharacter = firstRecurringCharacter(array);
console.log({ fRecurringCharacter });

const fRecurringCharacter2 = firstRecurringCharacter2(array);
console.log({ fRecurringCharacter2 });
