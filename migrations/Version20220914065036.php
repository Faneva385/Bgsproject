<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220914065036 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE carousel_place (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, place_name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE carousel_place_carousel (carousel_place_id INTEGER NOT NULL, carousel_id INTEGER NOT NULL, PRIMARY KEY(carousel_place_id, carousel_id), CONSTRAINT FK_89A55811D1120003 FOREIGN KEY (carousel_place_id) REFERENCES carousel_place (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_89A55811C1CE5B98 FOREIGN KEY (carousel_id) REFERENCES carousel (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_89A55811D1120003 ON carousel_place_carousel (carousel_place_id)');
        $this->addSql('CREATE INDEX IDX_89A55811C1CE5B98 ON carousel_place_carousel (carousel_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE carousel_place');
        $this->addSql('DROP TABLE carousel_place_carousel');
    }
}
