describe('Signal Controllers', () => {
  beforeEach(() => {
    cy.visit('controllers/signal_input_controller.html');
  });
  it('Should show the correct element for each expression', () => {
    let expressionTests = [
      // {values: [""], expressions: ["default"]},
      {values: ["4", "5", "6"], expressions: ["<12", '<15']},
      {values: ["-2", "-25", '-200'], expressions: ["<12", "<15"]},
      {values: ["14"], expressions: [">12&&<20", "<15"]},
      {values: ["15"], expressions: [">12&&<20"]},
      {values: ["19"], expressions: [">12&&<20", ">18&&<60&&!=23"]},
      {values: ["20", "21", "24"], expressions: [">18&&<60&&!=23"]},
      {values: ["23"], expressions: ["==23"]},
      {values: ["34", "40", "45", "50", "59"], expressions: [">18&&<60&&!=23"]},
      {values: ["60", "61", "70", "80"], expressions: [">=60"]},
    ];

    let expressions = {
      "default": 'Please type something',
      "<12": 'This content only applies to children',
      ">12&&<20": 'This content only applies to teenagers',
      "<15": 'This content only applies to everyone under 15',
      ">18&&<60&&!=23": 'This content only applies to over 18s',
      "==23": 'This content only applies to people who are exactly 23',
      ">=60": 'This content only applies to over 60s',
    };

    expressionTests.forEach(testObj => {
      testObj.values.forEach(value => {
        let shownTexts = [];
        let hiddenTexts = [];
        expressions.forEach(x => {
          if (testObj.expressions.includes(x.exp)) {
            shownTexts.push(x.text);
          } else {
            hiddenTexts.push(x.text);
          }
        });

        cy.get('input[name="age"]').type(value).trigger('input').then(() => {

          shownTexts.forEach(x => cy.contains(x).should('be.visible'));
          hiddenTexts.forEach(x => cy.contains(x).should('not.be.visible'));
        });
        cy.get('input[name="age"]').clear();
      });
    });

  });
});
