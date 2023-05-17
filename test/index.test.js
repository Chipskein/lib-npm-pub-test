import { it,expect } from "vitest";
import { Sum } from "../src";
it("Should Test index function",()=>{
    const n=Sum(1,1)
    expect(n).toBe(2)
})

