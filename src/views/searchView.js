`use strict`;

import View from "./View";
import icons from "url:../img/icons.svg";

class SearchView extends View {
  _parentEl;

  focusSearchBar() {
    this._parentEl = document.querySelector(`.search-container`);
    this._parentEl.querySelector(`input`).focus();
  }

  /**
   * Generates the html markup for the view
   * @returns {string} The html markup to render or update the view with
   * @author Ben Pinner
   */
  _generateMarkup() {
    const colour = this._data.colour;
    this._parentEl = document.querySelector(`.search-container`);

    const markup = `
            <form class="search-form">
                <div class="search"  
                        style="background-color: ${colour.lowerContrastColour.rgb};
                                color: ${colour.lowerContrastColour.contrastColour}"
                        >
                        <svg>
                            <use href="${icons}#icon-search"></use>
                        </svg>
                        <input type="text"
                        placeholder="Enter rgb and hex code"></input>
                        </div>
            </form>`;
    return markup;
  }
}

export default new SearchView();
