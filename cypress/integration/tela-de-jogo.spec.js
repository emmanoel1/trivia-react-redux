const { MD5 } = require('crypto-js');
const { fetch: fetchMock, expiredTokenFetch } = require('../mocks/fetch');
const { questionsResponse } = require('../mocks/questions');

const FETCH_TOKEN_URL = "https://opentdb.com/api_token.php?command=request";
const WORKING_QUESTIONS_URL = "https://opentdb.com/api.php?amount=5&token=f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6";
const BAD_QUESTIONS_URL = "https://opentdb.com/api.php?amount=5&token=b0d533aef5922425fb5962cbd3f1c79bd7da7599f949d672d3fbdca1f3bbe741";
const INPUT_PLAYER_NAME_SELECTOR = '[data-testid="input-player-name"]';
const INPUT_PLAYER_EMAIL_SELECTOR = '[data-testid="input-gravatar-email"]';
const BUTTON_PLAY_SELECTOR = '[data-testid="btn-play"]';
const HEADER_IMAGE_SELECTOR = '[data-testid="header-profile-picture"]';
const HEADER_NAME_SELECTOR = '[data-testid="header-player-name"]';
const HEADER_SCORE_SELECTOR = '[data-testid="header-score"]';
const QUESTION_CATEGORY_SELECTOR = '[data-testid="question-category"]';
const QUESTION_TEXT_SELECTOR = '[data-testid="question-text"]';
const CORRECT_ALTERNATIVE_SELECTOR = '[data-testid="correct-answer"]';
const WRONG_ALTERNATIVES_SELECTOR = '[data-testid*="wrong-answer"]';
const ALL_ALTERNATIVES_SELECTOR = '[data-testid="answer-options"]';
const BUTTON_NEXT_QUESTION_SELECTOR = '[data-testid="btn-next"]';
const FEEDBACK_TEXT_SELECTOR = '[data-testid="feedback-text"]';

const PLAYER_NAME = 'Nome da pessoa';
const PLAYER_EMAIL = 'email@pessoa.com';

describe('4 - [TELA DE JOGO] Crie um _header_ que deve conter as informações da pessoa jogadora', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(PLAYER_NAME);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(PLAYER_EMAIL);
    cy.get(BUTTON_PLAY_SELECTOR).click();
    cy.get(HEADER_NAME_SELECTOR);
  });

  it('Será validado se a imagem do Gravatar está presente no header', () => {
    cy.get(HEADER_IMAGE_SELECTOR).should('exist');
    cy.get(HEADER_IMAGE_SELECTOR).should('have.attr', 'src', `https://www.gravatar.com/avatar/${MD5(PLAYER_EMAIL)}`);
  });

  it('Será validado se o nome da pessoa está presente no header', () => {
    cy.get(HEADER_NAME_SELECTOR).contains(PLAYER_NAME);
  });
