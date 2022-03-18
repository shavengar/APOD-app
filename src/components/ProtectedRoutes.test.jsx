import React from "react";
import { render, screen } from "@testing-library/react";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { MemoryRouter } from "react-router-dom";

describe("redirecting with authorizaiton", () => {
    const ExampleComponent = () => {
        return <div data-testid="testComponent">Example</div>;
    };
    const currentUser = { id: 1 };
    it("should render private component", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <ProtectedRoutes isPrivate={true}>
                    <ExampleComponent user={currentUser} />
                </ProtectedRoutes>
            </MemoryRouter>
        );
    });
    it("should not render private component", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <ProtectedRoutes isPrivate={true}>
                    <ExampleComponent />
                </ProtectedRoutes>
            </MemoryRouter>
        );
    });
    expect(screen.queryByTestId("testComponent")).toBeDefined();
});
