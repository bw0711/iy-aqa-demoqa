import { BasePage } from './base.page';
import { ButtonsComponent } from 'po/components/elements/buttons.component';
import { Locator, Page } from '@playwright/test';

export class ElementsPage extends BasePage {
  private readonly category: Locator;
  public readonly buttons: ButtonsComponent;

  constructor(page: Page) {
    super(page);
    this.category = this.elementsLocator;
    this.buttons = new ButtonsComponent(page);
  }

  public async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }

  public async navigateToButtonsPage() {
    await this.navigateToCategory();
    await this.buttons.navigateToComponent();
  }
}
