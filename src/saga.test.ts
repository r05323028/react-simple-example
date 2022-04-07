import { createServer, Response, Server } from 'miragejs'
import { fetchMeSaga } from './saga'
import { runSaga, Saga } from 'redux-saga'
import { requestMeFailed, requestMeSuccess } from './features/me'

let server: Server

beforeEach(() => {
    server = createServer({
        routes() {
            this.urlPrefix = process.env.REACT_APP_API_HOST as string
        },
    })
})

afterEach(() => {
    server.shutdown()
})

test('Get me success', async () => {
    server.get(
        '/me',
        () => {
            return { name: 'Sean Chang' }
        },
        { timing: 2000 }
    )

    const actual: Array<{ type: string; payload: any }> = []
    const result = await runSaga(
        {
            dispatch: (action: { type: string; payload: any }) =>
                actual.push(action),
        },
        fetchMeSaga as Saga<any[]>
    ).toPromise()
    const expectedPayload = { name: 'Sean Chang' }
    const expected = [
        {
            type: requestMeSuccess(expectedPayload).type,
            payload: expectedPayload,
        },
    ]

    expect(result).toEqual(200)
    expect(actual).toStrictEqual(expected)
})

test('Get me failed', async () => {
    server.get(
        '/me',
        () => {
            return new Response(500, {}, {errors: ["Could not fetch user"]})
        },
        { timing: 2000 }
    )
    const actual: Array<{ type: string; payload: any }> = []
    const result = await runSaga(
        {
            dispatch: (action: { type: string; payload: any }) =>
                actual.push(action),
        },
        fetchMeSaga as Saga<any[]>
    ).toPromise()
    const expectedPayload = "Could not fetch name!"
    const expected = [
        {
            type: requestMeFailed(expectedPayload).type,
            payload: expectedPayload,
        },
    ]

    expect(result).toEqual(-1)
    expect(actual).toStrictEqual(expected)
})
