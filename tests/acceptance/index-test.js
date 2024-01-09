import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'learn-test/tests/helpers';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
  });
});
