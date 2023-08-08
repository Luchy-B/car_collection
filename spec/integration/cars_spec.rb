require 'swagger_helper'

describe 'Cars API' do
  path '/api/v1/cars' do
    post 'Creates a car' do
      tags 'Cars'
      consumes 'application/json', 'application/xml'
      parameter name: :car, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          finance_fee: { type: :integer },
          purchase_fee: { type: :integer },
          total_amount: { type: :integer },
          duration: { type: :integer },
          apr: { type: :decimal },
          snapshot: { type: :binary }
        },
        required: %w[name description]
      }

      response '201', 'car created' do
        let(:car) { { name: 'Vespa', description: 'Vespa 200' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:car) { { name: 'Vespa' } }
        run_test!
      end
    end
  end

  path '/api/v1/cars/{id}' do
    get 'Retrieves a car' do
      tags 'Cars'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'car found' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 name: { type: :string },
                 description: { type: :string },
                 finance_fee: { type: :integer },
                 purchase_fee: { type: :integer },
                 total_amount: { type: :integer },
                 duration: { type: :integer },
                 apr: { type: :decimal },
                 snapshot: { type: :binary }
               },
               required: %w[id name description]

        let(:id) { Car.create(name: 'Vespa', description: 'Vespa 200').id }
        run_test!
      end

      response '404', 'car not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end

  path '/api/v1/cars/{id}' do
    delete 'Deletes a car' do
      tags 'Cars'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '204', 'car deleted' do
        let(:id) { Car.create(name: 'Vespa', description: 'Vespa 200').id }
        run_test!
      end

      response '404', 'car not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end
