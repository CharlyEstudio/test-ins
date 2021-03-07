import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req, Res} from '@nestjs/common';
import { Response, Request } from 'express';

// Models
import { UserModel } from '../../core/services/users/model/user.model';

// Services
import { UsersService } from '../../core/services/users/users.service';
import {UsersEntity} from "../../core/services/users/entity/users.entity";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get()
    async getUsers(@Res() res: Response): Promise<any> {
        try {
            const users: UserModel[] = await this.usersService.getUsers();
            if (users.length === 0) {
                return res.status(HttpStatus.OK).json({
                    status: false,
                    code: HttpStatus.OK,
                    payload: 'No hay usuarios registrados'
                });
            }
            res.status(HttpStatus.OK).json({
                status: true,
                code: HttpStatus.OK,
                payload: users
            });
        } catch (e) {
            console.log('UsersController::getUsers:Catch:', e);
            res.status(HttpStatus.BAD_REQUEST).json({
                status: false,
                code: HttpStatus.BAD_REQUEST,
                payload: e
            });
        }
    }

    @Get('/:id')
    async getUser(@Param('id') id: number, @Res() res: Response, @Req() req: Request): Promise<any> {
        try {
            const user = await this.usersService.getUser(id);
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    status: false,
                    code: HttpStatus.NOT_FOUND,
                    payload: 'No hay usuario con el ID: ' + id
                });
            }
            res.status(HttpStatus.OK).json({
                status: true,
                code: HttpStatus.OK,
                payload: user
            });
        } catch (e) {
            console.log('UsersController::getUser:Catch:', e);
            res.status(HttpStatus.BAD_REQUEST).json({
                status: false,
                code: HttpStatus.BAD_REQUEST,
                payload: e
            });
        }
    }

    @Post()
    async saveUser(@Body() user: UserModel, @Res() res: Response, @Req() req: Request): Promise<any> {
        try {
            if (!user) {
                return res.status(HttpStatus.OK).json({
                    status: false,
                    code: HttpStatus.OK,
                    payload: 'No hay datos para registrar usuario'
                });
            }
            const saved = await this.usersService.saveUser(user);
            if (!saved) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    status: false,
                    code: HttpStatus.NOT_FOUND,
                    payload: 'No se guardó',
                    saved
                });
            }
            res.status(HttpStatus.OK).json({
                status: true,
                code: HttpStatus.OK,
                payload: 'Nuevo usuario',
                saved
            });
        } catch (e) {
            console.log('UsersController::saveUser:Catch:', e);
            res.status(HttpStatus.BAD_REQUEST).json({
                status: false,
                code: HttpStatus.BAD_REQUEST,
                payload: e
            });
        }
    }

    @Put()
    async updateUser(@Body() user: UserModel, @Res() res: Response, @Req() req: Request): Promise<any> {
        try {
            if (!user.id) {
                return res.status(HttpStatus.OK).json({
                    status: false,
                    code: HttpStatus.OK,
                    payload: 'Para actualizar el usuario, es necesario el ID'
                });
            }
            const userDB: UsersEntity = await this.usersService.getUser(user.id);
            if (!userDB) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    status: false,
                    code: HttpStatus.NOT_FOUND,
                    payload: 'No existe ningún usuario con el ID ' + user.id
                });
            }
            userDB.code = user.code;
            userDB.name = user.name;
            userDB.address = user.address;
            userDB.poblation = user.poblation;
            userDB.postalCode = user.postalCode;
            userDB.city = user.city;
            userDB.telephone = user.telephone;
            userDB.email = user.email;
            userDB.updatedAt = new Date();
            const update = await this.usersService.updateUser(userDB);
            if (!update) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    status: false,
                    code: HttpStatus.BAD_REQUEST,
                    payload: 'No se pudo guardar',
                    update
                });
            }

            res.status(HttpStatus.OK).json({
                status: true,
                code: HttpStatus.OK,
                payload: update
            });
        } catch (e) {
            console.log('UsersController::updateUser:Catch:', e);
            res.status(HttpStatus.BAD_REQUEST).json({
                status: false,
                code: HttpStatus.BAD_REQUEST,
                payload: e
            });
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: number, @Res() res: Response, @Req() req: Request): Promise<any> {
        try {
            await this.usersService.deleteUser(id);
            res.status(HttpStatus.OK).json({
                status: true,
                code: HttpStatus.OK,
                payload: 'Eliminado'
            });
        } catch (e) {
            console.log('UsersController::deleteUser:Catch:', e);
            res.status(HttpStatus.BAD_REQUEST).json({
                status: false,
                code: HttpStatus.BAD_REQUEST,
                payload: e
            });
        }
    }
}
