/* eslint-disable no-undef */
'use strict';

$(function() {
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();

    const listItem = $('#shopping-list-entry').val();

    $('.js-shopping-list-entry').val('');

    $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
    );
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this)
      .closest('li')
      .remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this)
      .closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
  });
});
