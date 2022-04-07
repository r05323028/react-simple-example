import counterReducer, { increment, decrement } from './counter'

test('initalState', () => {
    const expected = {
        count: 0,
    }
    const actual = counterReducer(undefined, { type: undefined })
    expect(actual).toStrictEqual(expected)
})

test('increment', () => {
    const action = increment(1)
    const expected = {
        count: 1
    }
    const actual = counterReducer(undefined, action)
    expect(actual).toStrictEqual(expected)
})

test('decrement', () => {
    const action = increment(-1)
    const expected = {
        count: -1
    }
    const actual = counterReducer(undefined, action)
    expect(actual).toStrictEqual(expected)
})