// clubs/src/clubs.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MembersModule } from './members/members.module';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { Club } from '../entity/app.entity';

describe('ClubsController', () => {
  let clubsController: ClubsController;
  let clubsService: ClubsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MembersModule],
      controllers: [ClubsController],
      providers: [ClubsService],
    }).compile();

    clubsController = module.get<ClubsController>(ClubsController);
    clubsService = module.get<ClubsService>(ClubsService);
  });

  describe('getClubs', () => {
    it('should return all clubs', async () => {
      const result: Club[] = [
        { id: 1, name: 'ACM' },
        { id: 2, name: 'UCLA SWE' },
      ];
      jest.spyOn(clubsService, 'getClubs').mockResolvedValue(result);

      expect(await clubsController.getClubs()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single club', async () => {
      const club: Club = { id: 1, name: 'ACM' };
      jest.spyOn(clubsService, 'findOne').mockResolvedValue(club);

      expect(await clubsController.findOne('ACM')).toEqual(club);
    });

    it('should throw if club does not exist', async () => {
      jest.spyOn(clubsService, 'findOne').mockImplementation(() => {
        throw new Error('Club Nonexistent does not exist');
      });

      await expect(clubsController.findOne('Nonexistent')).rejects.toThrow(
        'Club Nonexistent does not exist',
      );
    });
  });

  describe('createClub', () => {
    it('should create a new club', async () => {
      const newClub = { name: 'ACM Jr' };
      const createdClub: Club = { id: 3, name: 'ACM Jr' };

      jest.spyOn(clubsService, 'create').mockResolvedValue(createdClub);

      expect(await clubsController.create(newClub)).toEqual(createdClub);
    });
  });
});
