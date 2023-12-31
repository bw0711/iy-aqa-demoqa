import { Page, Locator } from '@playwright/test';

export class ButtonsComponent {
  constructor(private readonly page: Page) {}

  public get component(): Locator {
    return this.page.locator('#item-4', { has: this.page.getByText('Buttons') });
  }

  public get doubleClickBtn(): Locator {
    return this.page.locator('[id="doubleClickBtn"]');
  }

  public get rightClickBtn(): Locator {
    return this.page.locator('[id="rightClickBtn"]');
  }

  public get singleClickBtn(): Locator {
    return this.page.locator('.btn-primary').last();
  }

  public get dcBtnMessage(): Locator {
    return this.page.locator('[id="doubleClickMessage"]');
  }

  public get rcBtnMessage(): Locator {
    return this.page.locator('[id="rightClickMessage"]');
  }

  public get scBtnMessage(): Locator {
    return this.page.locator('[id="dynamicClickMessage"]');
  }

  public async navigateToComponent() {
    return this.component.click();
  }
}
