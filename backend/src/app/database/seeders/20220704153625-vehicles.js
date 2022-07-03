'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    return queryInterface.bulkInsert(
      'vehicles',
      [
        {
          name: "Fiat Mobi",
          license_plate: "ABC-1234",
          brand: "Fiat",
          model: "Mobi",
          version: "Hatch Compacto",
          year: 2022,
          image: "https://unidashmlrac.blob.core.windows.net/wp-content/2021/02/am_fiat_mobi.png",
          created_at: now,
          updated_at: now
        },
        {
          name: "Fiat Argo",
          license_plate: "GDG-8556",
          brand: "Fiat",
          model: "Argo",
          version: "Hatch Médio",
          year: 2022,
          image: "https://unidashmlrac.blob.core.windows.net/wp-content/2021/03/b_fiat_argo.png",
          created_at: now,
          updated_at: now
        },
        {
          name: "Chevrolet Cruze",
          license_plate: "UGH-9885",
          brand: "Chevrolet",
          model: "Cruze",
          version: "Sedan Executivo AT",
          year: 2022,
          image: "https://unidashmlrac.blob.core.windows.net/wp-content/2021/03/at_chevrolet_cruze.png",
          created_at: now,
          updated_at: now
        },
        {
          name: "Renault Logan",
          license_plate: "LJN-3211",
          brand: "Volkswagen",
          model: "Logan",
          version: "Sedan Médio",
          year: 2022,
          image: "https://unidashmlrac.blob.core.windows.net/wp-content/2021/03/bs_renault_logan.png",
          created_at: now,
          updated_at: now
        },
        {
          name: "Fiat Toro",
          license_plate: "NMH-9987",
          brand: "Fiat",
          model: "Toro",
          version: "Picape Luxo",
          year: 2022,
          image: "https://unidashmlrac.blob.core.windows.net/wp-content/2021/03/t_fiat_toro.png",
          created_at: now,
          updated_at: now
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicles', null, {})
  }
};
