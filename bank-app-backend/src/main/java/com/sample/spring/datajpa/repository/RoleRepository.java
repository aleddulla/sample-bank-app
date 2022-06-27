package com.sample.spring.datajpa.repository;

import java.util.Optional;

import com.sample.spring.datajpa.models.ERole;
import com.sample.spring.datajpa.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
