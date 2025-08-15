import { describe, expect, it } from "vitest";

describe("slow tests", () => {
    it.concurrent("should pass 1", async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(1).toBe(1);
    });

    it.concurrent("should pass 2", async () => {
        await new Promise(resolve => setTimeout(resolve, 23000));
        expect(2).toBe(2);
    });

    it.concurrent("should pass 3", async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(3).toBe(3);
    });
});