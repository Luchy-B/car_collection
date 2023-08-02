require 'swagger_helper'

describe 'Reservations API' do
  path '/api/v1/reservations' do
    post 'Creates a reservation' do
      tags 'Reservations'
      consumes 'application/json', 'application/xml'
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          date: { type: :date },
          city: { type: :string },
          user_id: { type: :bigint },
          car_id: { type: :bigint }
        },
        required: ['city']
      }

      response '201', 'reservation created' do
        let(:reservation) { { city: 'Germany' } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:reservation) { { city: 'Germany' } }
        run_test!
      end
    end
  end

  path '/api/v1/reservations/{id}' do
    get 'Retrieves a reservation' do
      tags 'Reservations'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'reservation found' do
        schema type: :object,
               properties: {
                 date: { type: :date },
                 city: { type: :string },
                 user_id: { type: :bigint },
                 car_id: { type: :bigint }
               },
               required: %w[id city]

        let(:id) { Reservation.create(city: 'Germany').id }
        run_test!
      end

      response '404', 'reservation not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end

  path '/api/v1/reservations/{id}' do
    delete 'Deletes a reservation' do
      tags 'Reservations'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '204', 'reservation deleted' do
        let(:id) { Reservation.create(city: 'Germany').id }
        run_test!
      end

      response '404', 'reservation not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end
