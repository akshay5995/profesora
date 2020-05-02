package com.prefesora.server.services

import com.prefesora.server.UserRegistry.{ActionPerformed, CreateUser, DeleteUser, GetUser, GetUserResponse, GetUsers}
import com.prefesora.server.{User, Users}

import scala.concurrent.Future

trait UserService {
  def getUser(): Future[Users]
  def getUser(name: String): Future[GetUserResponse]
  def createUser(user: User): Future[ActionPerformed]
  def deleteUser(name: String): Future[ActionPerformed]
}

class UserServiceImpl extends UserService {
  override def getUsers(): Future[Users] =
    userRegistry.ask(GetUsers)
  override def getUser(name: String): Future[GetUserResponse] =
    userRegistry.ask(GetUser(name, _))
  override def createUser(user: User): Future[ActionPerformed] =
    userRegistry.ask(CreateUser(user, _))
  override def deleteUser(name: String): Future[ActionPerformed] =
    userRegistry.ask(DeleteUser(name, _))
}
