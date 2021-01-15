import { types } from "../../types/types"
import { typesTest } from "../fixtures/types"

describe('Testing types', () => {
    
    test('should not change this archive', () => {
        expect(types).toEqual(typesTest)
    })
    
})
