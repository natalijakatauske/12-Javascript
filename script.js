cool_array = [
    [
        [
            [
                [
                    [1],
                    [2],
                    ['2a'],
                    [3]
                ],
            ],
            [
                [
                    [4],
                    ['4c'],
                    [5],
                    [6],
                    ['6b']
                ],
            ],
            [
                [
                    [7],
                    [8],
                    [9],
                    ['9a'],
                    ['9b'],
                    ['9c'],
                    ['9d'],
                ],
            ]
        ],
        [
            [
                [
                    [10],
                    [11],
                    [12]
                ],
            ],
            [
                [
                    [13],
                    [14],
                    [15]
                ],
            ],
            [
                [
                    [16],
                    [17],
                    [18]
                ],
            ]
        ]
    ],
]

console.log(cool_array)

for (first of cool_array) {
    // console.log(first)
    for (second of first) {
        // console.log(second)
        for (third of second) {
            // console.log(third)
            for (fouth of third) {
                // console.log(fouth)
                for (fifth of fouth) {
                    // console.log(fifth)
                    for (sixth of fifth) {
                        console.log(sixth)
                    }
                }
            }
        }
    }
}