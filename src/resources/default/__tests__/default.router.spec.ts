import router from "../default.router";

describe("default router", () => {
  test("GET / exists", () => {
    const route = { path: "/", method: "get" };

    const match = router.stack.find(
      (entry) =>
        entry.route.path === route.path && entry.route.methods[route.method]
    );

    expect(match).toBeTruthy();
  });
});
