import meReducer, { requestMe, requestMeFailed, requestMeSuccess } from './me'

test('initialState', () => {
    const expected = {
        name: '',
        message: '',
        loading: false,
    }
    const actual = meReducer(undefined, {type: undefined})
    expect(actual).toStrictEqual(expected)
})

test('request me', () => {
    const action = requestMe()
    const expected = {
        name: '',
        message: '',
        loading: true,
    }
    const actual = meReducer(undefined, action)
    expect(actual).toStrictEqual(expected)
})

test('request me success', () => {
    const action = requestMeSuccess({name: "Mock Name"})
    const expected = {
        name: 'Mock Name',
        message: '',
        loading: false,
    }
    const actual = meReducer(undefined, action)
    expect(actual).toStrictEqual(expected)
})

test('request me failed', () => {
    const action = requestMeFailed("Mock Message")
    const expected = {
        name: '',
        message: 'Mock Message',
        loading: false,
    }
    const actual = meReducer(undefined, action)
    expect(actual).toStrictEqual(expected)
})