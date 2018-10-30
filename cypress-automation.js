// Logs in as admin
describe('access (logged in as channel admin)', function () {
  beforeEach(function () {
    cy.clearCookies();
    cy.login('email', 'password');
  });

    // Looks for group Active Onboarding and checks page
    it('checks group active onboarding', function () {
      cy.visit('url path');
      cy.visit('url path');
      cy.contains('Monitor Enrollment');
    });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        //cy.contains('Active Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        //cy.contains('Active Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        //cy.contains('Active Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
        //cy.contains('Active Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });

    // Looks for group Active Live and checks page
    it('checks group active live', function () {
        cy.visit('url path');
        cy.visit('url path');
        cy.contains('Monitor Enrollment');
      });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        cy.visit('url path');
        cy.contains('Expect(LiveNotOnboarded)');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });

    // Looks for group Demo Onboarding and checks page
    it('checks group demo onboarding', function () {
        cy.visit('url path');
        cy.visit('url path');
        //cy.contains('Demo Onboarding').click();
        cy.contains('Monitor Enrollment');
    });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
       // cy.contains('demo').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for group Demo Live and checks page
    it('checks group demo live', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Live').click();
        cy.visit('url path');
        cy.contains('Monitor Enrollment');
    });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Live').click();
        cy.visit('url path');
        cy.contains('get you set up');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
        //cy.contains('demo').click();
        //cy.contains('Demo Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });

    // Looks for group Inactive Onboarding and checks page
    it('checks group inactive onboarding', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Onboarding').click();
        cy.visit('url path');
        cy.contains('Monitor Enrollment');
    });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Onboarding').click();
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });

    // Looks for group Inactive Live and checks page
    it('checks group inactive live', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Live').click();
        cy.visit('url path');
        cy.contains('Monitor Enrollment');
    });

    // Looks for employee one and checks page
    it('checks employee one', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Live').click();
        cy.visit('url path');
        cy.contains('get you set up');
    });

    // Looks for employee two and checks page
    it('checks employee two', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });

    // Looks for employee three and checks page
    it('checks employee three', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });

    // Looks for employee four and checks page
    it('checks employee four', function () {
        cy.visit('url path');
        //cy.contains('inactive').click();
        //cy.contains('Inactive Live').click();
        cy.visit('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Active Onboarding employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });
});

// Logs in as Active Onboarding employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });
});

// Logs in as Active Onboarding employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });
});

// Logs in as Active Onboarding employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccountPage)');
    });
});

// Logs in as Active Live employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('get you set up');
    });
});

// Logs in as Active Live employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for New Hire Welcome page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });
});

// Logs in as Active Live employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });
});

// Logs in as Active Live employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHirePage)');
    });
});

// Logs in as Demo Onboarding employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Demo Onboarding employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Demo Onboarding employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Demo Onboarding employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Demo Live employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for New Hire Welcome page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('get you set up');
    });
});

// Logs in as Demo Live employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Demo Live employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Demo Live employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Inactive Onboarding employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Inactive Onboarding employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Inactive Onboarding employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Inactive Onboarding employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Onboarding) Expect(AccoutPage)');
    });
});

// Logs in as Inactive Live employee one
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for New Hire Welcome page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('get you set up');
    });
});

// Logs in as Inactive Live employee two
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Inactive Live employee three
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});

// Logs in as Inactive Live employee four
describe('access (logged in as employee)', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.login('email', 'password');
    });

    // Checks for Employee Portal page
    it('checks Employee Portal Page', function () {
        cy.visit ('url path');
        cy.contains('Expect(Live) Expect(NewHireWelcome)');
    });
});